import { LightningElement, track} from 'lwc';
import fetchAccount from '@salesforce/apex/AccountRelatedObj.fetchAccount';
import fetchContact from '@salesforce/apex/AccountRelatedObj.getContacts';
import fetchOpportunity from '@salesforce/apex/AccountRelatedObj.fetchOpportunity';
import getClosedWonOpp from '@salesforce/apex/AccountRelatedObj.getClosedWonOpp';
import getClosedLostOpp from '@salesforce/apex/AccountRelatedObj.getClosedLostOpp';
import getAmountClosedWonOpp from  '@salesforce/apex/AccountRelatedObj.getAmountClosedWonOpp';
import fetchCase from  '@salesforce/apex/AccountRelatedObj.fetchCase';
import getOpenCase from  '@salesforce/apex/AccountRelatedObj.getOpenCase'; 
import getClosedCase from  '@salesforce/apex/AccountRelatedObj.getClosedCase';
import ID_FIELD from '@salesforce/schema/Account.Id';
import Financial_Year from '@salesforce/schema/Account.Financial_Year__c';
import Full_Year_Target_Revenue from '@salesforce/schema/Account.Full_Year_Target_Revenue__c';
import Campaign_Budget from '@salesforce/schema/Account.Campaign_Budget__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { updateRecord } from 'lightning/uiRecordApi'; 

export default class AccountSummary extends LightningElement {
   
    @track acc;
    @track con;
    msg;
    @track opp;
    @track closedwonofopp;
    @track closedlostopp;
    @track oppamount;
    @track cs;
    @track case;
    @track noopencase;
    @track noclosecase;
    updateAccount(){
      const fields = {};
      fields[ID_FIELD.fieldApiName] = this.msg;
      fields[Financial_Year.fieldApiName] = this.template.querySelector("[data-field='Financial_Year__c']").value;
      fields[Full_Year_Target_Revenue.fieldApiName] = this.template.querySelector("[data-field='Full_Year_Target_Revenue__c']").value;
      fields[Campaign_Budget.fieldApiName] = this.template.querySelector("[data-field='Campaign_Budget__c']").value;
      console.log(fields);

      const recordInput = { fields };
      updateRecord(recordInput)
      .then(() => {
          this.dispatchEvent(
              new ShowToastEvent({
                  title: 'Account Updated Succesfully',
                  message: 'go to accounts to see the update',
                  variant: 'success'
              })
          );
      })
      .catch(error => {
          console.log(error);
      });
  }
    connectedCallback(){
                        fetchAccount()
                        .then(result => {
                                        this.acc = result;

                                        console.log(JSON.stringify(result));
                                        console.log("result",this.acc);
                                        })

                        }

    
    contactFetch(event){
                            this.msg = event.target.value;
                            console.log('Contact Id-->'+this.msg);
                            fetchContact({accountId : this.msg})

                            .then(result => {
                                                this.con = result;

                                                console.log(JSON.stringify(result));
                                                console.log("result1",this.con);
                                            })
                            .catch(error =>{
                            this.error = error;

                                            })

                            this.msg = event.target.value;
                            console.log('Oppoertunity Id-->'+this.msg);
                            fetchOpportunity({accountId : this.msg})
                            .then(result => {
                                              this.opp = result;

                                              console.log(JSON.stringify(result));
                                              console.log("result2",this.opp);
                                            })
                            .catch(error =>{
                                            this.error = error;

                                            })
                            this.msg = event.target.value;
                            console.log('Opportunity Id-->'+this.msg);
                            getClosedWonOpp({accountId : this.msg})
                            .then(result => {
                                              this.closedwonofopp = result;

                                              console.log(JSON.stringify(result));
                                              console.log("result3",this.closedwonofopp);
                                            })
                            .catch(error =>{
                                            this.error = error;

                                            })
                            this.msg = event.target.value;
                            console.log('Opportunity Id-->'+this.msg);
                            getClosedLostOpp({accountId : this.msg})
                            .then(result => {
                                              this.closedlostopp = result;

                                              console.log(JSON.stringify(result));
                                              console.log("result4",this.closedlostopp);
                                            })
                            .catch(error =>{
                                            this.error = error;

                                            })
                                            this.msg = event.target.value;
                                            console.log('Amountopp Id-->'+this.msg);
                                            getAmountClosedWonOpp({accountId : this.msg})
                                            .then(result => {
                                                              this.oppamount = result;
                                
                                                              console.log(JSON.stringify(result));
                                                              console.log("result4",this.oppamount);
                                                            })
                                            .catch(error =>{
                                                            this.error = error;
                                
                                                            })
                                            this.msg = event.target.value;
                                            console.log('Case Id-->'+this.msg);
                                            fetchCase({accountId : this.msg})
                                            .then(result => {
                                                                this.cs = result;
                    
                                                                console.log(JSON.stringify(result));
                                                                console.log("result",this.cs);
                                                            })
                                            .catch(error =>{
                                                            this.error = error;
                    
                                                            })
                                                            this.msg = event.target.value;
                                                            console.log('Case Id-->'+this.msg);
                                                            getClosedCase({accountId : this.msg})
                                                            .then(result => {
                                                                              this.noclosedcase = result;
                                                                
                                                                              console.log(JSON.stringify(result));
                                                                              console.log("result5",this.noclosedcase);
                                                                            })
                                                            .catch(error =>{
                                                                            this.error = error;
                                                                
                                                                            })
                                                            this.msg = event.target.value;
                                                            console.log('Case Id-->'+this.msg);
                                                            getOpenCase({accountId : this.msg})
                                                            .then(result => {
                                                                              this.noopencase = result;
                                                                                
                                                                              console.log(JSON.stringify(result));
                                                                              console.log("result6",this.noopencase);
                                                                            })
                                                            .catch(error =>{
                                                                            this.error = error;
                                                                                
                                                                            })
                                        }
}