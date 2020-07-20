<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// pages routes
Route::get('/','PageController@home');
Route::get('/home','PageController@home');
Route::get('/space','PageController@space');
Route::get('/duels','PageController@duels');
Route::get('/profile','PageController@profile')->name('profile');
Route::get('/profile/auth','PageController@profile');
Route::get('/share/{type}/{uniqueId}','PageController@handleShare');
Route::get('/view-profile','PageController@viewProfile');

//Users routes
Route::post('/save-notification','UserController@SaveNotification');

// Auth Routes
Route::post('/check-if-email-exist','UserController@checkIfMailExist');
Route::post('/verify-user-email','UserController@verifyEmail');
Route::post('/register','Auth\RegisterController@create');
Route::post('/check-if-username-exist','UserController@checkIfUsernameExist');
Route::post('/login','Auth\LoginController@login');


// Post Routes
Route::post('/save-post','PostController@savePost');
Route::get('/fetch-post','PostController@fetchPosts');
Route::get('/fetch-activities-{username}','PostController@fetchActivities');
Route::get('/fetch-post/{postId}','PostController@EachPost');
Route::get('/post-comments/{postId}','PostController@postComments');
Route::get('/fetch-shelve-post/{shelveId}','PostController@shelvePosts');
Route::post('/save-liked-post','PostController@likePost');

//Library Routes
Route::post('/save-shelve','LibraryController@saveShelve');
Route::get('/fetch-user-shelves','LibraryController@fetchShelves');
Route::post('/add-post-to-selve','LibraryController@addPostToShelve');

// Duel Routes
Route::post('/save-duel','DuelController@saveDuel');
Route::get('/fetch-duels','DuelController@fetchDuel');
Route::get('/fetch-this-duel/{duelId}/{type}','DuelController@fetchThisDuel');
Route::post('/save-duel-comment','DuelController@saveDuelComment');
Route::get('/fetch-duel-comments/{duelId}','DuelController@fetchDuelComments');
Route::post('/save-liked-duel','DuelController@likeDuel');
Route::post('/save-liked-duel-comment','DuelController@likeDuelComments');
Route::post('/join-duel','DuelController@joinDuel');
Route::get('/fetch-duel-participants/{duelId}','DuelController@FetchDuelParticipants');
Route::post('/save-duel-votes','DuelController@saveDuelVotes');
Route::get('/fetch-duel-results/{duelId}','DuelController@DuelResults');
Route::get('/fetch-user-duels','DuelController@fetchUserDuel');
Route::post('/start-duel','DuelController@startDuel');
Route::post('/make-team','DuelController@MakeTeam');


// Panel Routes
Route::post('/save-code-file','PanelController@SaveCodeFile');
Route::post('/save-code-file-project','PanelController@SaveCodeFileProject');
Route::get('/fetch-code-files/{duelId}','PanelController@fetchCodeFiles');
Route::get('/fetch-code-files-project/{projectSlug}','PanelController@fetchCodeFilesProject');
Route::post('/save-panel-settings','PanelController@SaveSettings');
Route::post('/save-panel-settings-project','PanelController@SaveSettingsProject');
Route::post('/save-code-content','PanelController@saveCodeContent');
Route::post('/save-code-content-project','PanelController@saveCodeContentProject');
Route::post('/save-route','PanelController@saveRouteFile');
Route::post('/save-route-project','PanelController@saveRouteFileProject');
Route::post('/save-db-table','PanelController@CreateDB');
Route::post('/save-db-table-project','PanelController@CreateDBProject');
Route::post('/save-db-table-field','PanelController@CreateDBTableField');
Route::post('/save-db-table-entry','PanelController@CreateDBTableEntry');
Route::get('/fetch-table-entries/{tableId}','PanelController@fetchDatabaseContent');
Route::get('/run-panel/{panelId}','PanelController@runPanel');
Route::get('/page-loader/{panelId}/{pageName}','PanelController@pageLoader');




//Space Routes
Route::post('/create-space','SpaceController@createSpace');
Route::get('/fetch-user-spaces','SpaceController@fetchUserSpaces');
Route::post('/send-message','SpaceController@saveMessage');
Route::get('/fetch-space-messages-{spaceId}','SpaceController@fetchMessages');
Route::post('/update-space','SpaceController@updateSpace');
Route::get('/fetch-owner-list','SpaceController@ownerList');
Route::get('/fetch-space-resources-{spaceId}','SpaceController@spaceResource');
Route::get('/fetch-space-members-{spaceId}','SpaceController@fetchSpaceMembers');


//Project Routes
Route::post('/create-project','ProjectController@createProject');
Route::get('/fetch-space-projects-{spaceId}','ProjectController@fetchProjects');
Route::get('/fetch-project-{projectSlug}','ProjectController@fetchProject');
Route::post('/save-project-stars','ProjectController@saveProjectStar');
Route::post('/save-project-comment','ProjectController@saveComment');
Route::post('/save-panel-comment','ProjectController@saveCommentPanel');
Route::get('/fetch-comment-project-{projectSlug}','ProjectController@fetchProjectComments');
Route::post('/save-liked-project-comment','ProjectController@saveProjectLikes');
Route::get('fetch-comment-panel-{teamCode}','ProjectController@TeamComment');

// Profile Routes
Route::post('/update-profile','ProfileController@UpdateProfile');
Route::get('/fetch-profile-{username}','ProfileController@fetchProfile');
Route::get('/fetch-projects-{username}','ProfileController@fetchProjects');
Route::get('/fetch-teams-{username}','ProfileController@fetchTeams');
Route::get('/connect-user-{username}','ProfileController@connectUser');
Route::get('/fetch-connections','ProfileController@userConnections');
Route::get('/fetch-connected','ProfileController@userConnected');
Route::get('/fetch-all-connected','ProfileController@userAllConnected');
