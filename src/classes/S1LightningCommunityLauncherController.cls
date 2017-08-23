public with sharing class S1LightningCommunityLauncherController {
	@AuraEnabled
	public static String getSessionId(){
		return UserInfo.getSessionId();
	}
}