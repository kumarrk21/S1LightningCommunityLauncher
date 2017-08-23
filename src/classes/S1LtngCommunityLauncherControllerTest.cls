@isTest
private class S1LtngCommunityLauncherControllerTest {
	
	@isTest static void test_method_one() {
		String sessionId = S1LightningCommunityLauncherController.getSessionId();
		System.assertNotEquals(sessionId,'');
	}
	
	
}