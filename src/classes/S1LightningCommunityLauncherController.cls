public with sharing class S1LightningCommunityLauncherController {
	@AuraEnabled
	public static String getSessionId(){
		return UserInfo.getSessionId();
	}

	@AuraEnabled
	public static String getCommunityDetails(){
		S1LtngCommunityLauncher__mdt communityDetails = [SELECT Community_URL__c, Landing_Page_URL__c FROM S1LtngCommunityLauncher__mdt LIMIT 1];
		return JSON.serialize(communityDetails);
	}
}