public with sharing class OpenHouseShowList {
    
        @AuraEnabled (cacheable=true scope='global')
        public static Open_House_Show__c[] GetRecords() {
            return [Select Id, Name, Show_Date__c, Start_Time__c, End_Time__c , Remaining_Number_Visitors__c
            FROM Open_House_Show__c LIMIT 10];
        
        }
    
    }