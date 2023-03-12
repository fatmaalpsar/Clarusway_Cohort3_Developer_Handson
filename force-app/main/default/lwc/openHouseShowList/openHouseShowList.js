import { LightningElement, wire } from 'lwc';
import homeResources from '@salesforce/resourceUrl/ursus_park';
/** BearController.getAllBears() Apex method */
import getRecordsApex from "@salesforce/apex/OpenHouseShowList.GetRecords";
export default class HomeList extends LightningElement {
	@wire(getRecordsApex) homes;
	
	appResources = {
		homeLogo: `${homeResources}/smallhome.png`,
	};
	
}

