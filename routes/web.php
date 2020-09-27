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
Route::get('/','PageController@space');
Route::get('/home','PageController@space');
Route::get('/trends','PageController@trends');
Route::get('/space','PageController@space');
Route::get('/duels','PageController@duels');
Route::get('/profile','PageController@profile')->name('profile');
Route::get('/profile/auth','PageController@profile');
Route::get('/share/{type}/{uniqueId}','PageController@handleShare');
Route::get('/view-profile','PageController@viewProfile');
Route::get('/link/{type}/{uniqueId}/{referral}','PageController@handelLink');
Route::post('/url/metadata','PageController@fetchURLMetaData');
Route::get('/sample','PageController@sample');

//Users routes
Route::post('/save-notification','UserController@SaveNotification');
Route::get('/user-notification','UserController@fetchUserNotifications');
Route::post('/mark-as-read','UserController@MarkAsRead');

// Auth Routes
Route::post('/check-if-email-exist','UserController@checkIfMailExist');
Route::post('/verify-user-email','UserController@verifyEmail');
Route::post('/register','Auth\RegisterController@create');
Route::post('/check-if-username-exist','UserController@checkIfUsernameExist');
Route::post('/login','Auth\LoginController@login');
Route::post('/logout','Auth\LoginController@logout');
Route::post('/resend-email','UserController@resendEmail');


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
Route::get('/fetch-trend-duels/{query?}','DuelController@fetchTrendDuels');

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
Route::post('/upload-panel-file','PanelController@uploadPanelFiles');
Route::post('/delete-project','PanelController@deleteProjectPanel');




//Space Routes
Route::post('/create-space','SpaceController@createSpace');
Route::get('/fetch-user-spaces','SpaceController@fetchUserSpaces');
Route::get('/fetch-user-channels-{username}','SpaceController@fetchChannelsProfile');
Route::post('/send-message','SpaceController@saveMessage');
Route::get('/fetch-space-messages-{spaceId}','SpaceController@fetchMessages');
Route::post('/update-space','SpaceController@updateSpace');
Route::get('/fetch-owner-list','SpaceController@ownerList');
Route::get('/fetch-space-resources-{spaceId}','SpaceController@spaceResource');
Route::get('/fetch-space-members-{spaceId}','SpaceController@fetchSpaceMembers');
Route::get('/fetch-trend-channels/{query?}','SpaceController@fetchTrendChannels');
Route::get('/fetch-suggested-channels','SpaceController@fetchSuggestedChannels');
Route::post('/check-for-unread-messages','SpaceController@checkUnreadMessages');
Route::post('/check-for-unread-messages-clean','SpaceController@checkUnreadMessagesClean');
Route::get('/download-file-{messageId}','SpaceController@downloadFile');
Route::post('/leave-space','SpaceController@leaveSpace');
Route::post('/delete-message','SpaceController@deleteMessage');
Route::post('/save-selected-channels','SpaceController@saveSelectedChannels');
Route::get('/check-for-new-space-messages','SpaceController@CheckForUpdatesSpace');
Route::post('/make-user-admin','SpaceController@makeUserAdmin');
Route::post('/make-user-master','SpaceController@makeUserMaster');
Route::post('/send-space-invite-mail','SpaceController@sendInviteMail');
Route::post('/create-sub-space','SpaceController@createSubSpace');

// should be deleted
Route::get('/assistant-messager/{messageId}','SpaceController@createMessageAssistant');



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
Route::get('fetch-user-projects','ProjectController@fetchAllProjects');
Route::get('/fetch-trend-projects/{query?}','ProjectController@fetchTrendProject');
Route::post('/add-contributors','ProjectController@addContributors');
Route::post('/save-project-title','ProjectController@saveProjectTitle');


// Profile Routes
Route::post('/update-profile','ProfileController@UpdateProfile');
Route::get('/fetch-profile-{username}','ProfileController@fetchProfile');
Route::get('/fetch-user-info/{username}','ProfileController@userInfo');
Route::post('/save-page-tracking','ProfileController@savePageTracking');
Route::get('/fetch-projects-{username}','ProfileController@fetchProjects');
Route::get('/fetch-teams-{username}','ProfileController@fetchTeams');
Route::get('/connect-user-{username}','ProfileController@connectUser');
Route::get('/fetch-connections','ProfileController@userConnections');
Route::get('/fetch-connected','ProfileController@userConnected');
Route::get('/fetch-all-connected','ProfileController@userAllConnected');
Route::get('/fetch-trend-connections/{query?}','ProfileController@fetchTrendConnections');
Route::post('/send-to-connections','ProfileController@sendToConnections');


// sanbox routes
Route::post('/run-code-on-sandbox','SandboxController@runCode');
Route::post('/check-for-submission','SandboxController@checkSubmission');
Route::post('/run-code-on-sandbox-project','SandboxController@runProjectSandbox');





