({
	doInit : function(cmp, evt, helper) {
		var apexMethod = cmp.get('c.getCommunityDetails');
        apexMethod.setCallback(this, function(response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                try{
                	var communityDetails = JSON.parse(response.getReturnValue())
                	cmp.set('v.communityURL',communityDetails.Community_URL__c)
                	cmp.set('v.commLandingPage',communityDetails.Landing_Page_URL__c)
                	cmp.set('v.isInited', true)
                }catch(e){

                }
            } else {
                var errMessage = 'Error in Apex: Check Apex Debug Logs';
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        errMessage = 'Error in Apex: ' + errors[0].message;
                    }
                }
                cmp.set('v.isError', true)
                cmp.set('v.errMessage', errMessage);

            }
        });
        $A.enqueueAction(apexMethod);
	}
})