import { NavigationMixin } from 'lightning/navigation';
import { LightningElement, wire } from 'lwc';

/** BearController.getAllBears() Apex method */
import getRecordsApex from "@salesforce/apex/OpenHouseShowList.GetRecords";
export default class HomeList extends NavigationMixin (LightningElement) {
	@wire(getRecordsApex) homes;

	handleHomeView(event) {
		// Get bear record id from bearview event
		const homeId = event.target.value;
		// Navigate to bear record page
		this[NavigationMixin.Navigate]({
			type: 'standard__recordPage',
			attributes: {
				recordId: homeId,
				objectApiName: 'Open_House_Show__c',
				actionName: 'view',
			},
	
}
		)}}
