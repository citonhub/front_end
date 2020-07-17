<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Shelve;
use App\ShelvePost;
use App\Post;
use App\Events\UserChannel;
use DB;
use App\Events\PostChannel;
use Illuminate\Support\Facades\Auth;

class LibraryController extends Controller
{
    public function saveShelve(Request $request){
       $newshelve = Shelve::create([
          "user_id" => Auth::id(),
          "shelve_id"=> $this->generateRandomNumber(15),
          "name"=> $request->get('shelveName')
       ]);

       $newshelve->save();

       return ['status','ok'];
    }

    public function fetchShelves(){
       
        $allShelves = Shelve::where('user_id',Auth::id())->get();

        return $allShelves;
    }


    public function userAllConnected(){
      
        $userConnections = DB::table('user_connections')
        ->join('users','users.id','user_connections.connected_user_id')
        ->join('profiles','profiles.user_id','user_connections.connected_user_id')
        ->select(
          'users.username as username'
        )
        ->where('user_connections.user_id',Auth::id())
        ->get();
  
       return $userConnections;  
  
      }

    public function addPostToShelve(Request $request){

         $shelvePost = ShelvePost::where('user_id',Auth::id())->where('post_id', $request->get('post_id'))->get();

          if($shelvePost->isEmpty()){
            $shelvePost = ShelvePost::create([
                "shelve_id" => $request->get('shelve_id'),
                "post_id"=> $request->get('post_id'),
                "user_id"=> Auth::id()
              ]);
      
      
      
              $shelvePost->save();
      
              $post = Post::where('post_id',$request->get('post_id'))->first();
      
               $postPulls = $post->pulls + 1;
      
               $post->update([
                   "pulls"=> $postPulls
               ]);
          } 

        
        
          broadcast(new PostChannel('post-pulled',$shelvePost->post_id,$post->post_id))->toOthers();

          broadcast(new PostChannel('post-comment-pulled',$shelvePost->post_id,$post->commented_post_id))->toOthers();

        return ['status','ok'];
    }


   public function generateRandomNumber($length = 10) {
    $characters = 'abcdefghijklmnopqrisuvwxyz1234567890';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }   
    return $randomString;
     }


}
