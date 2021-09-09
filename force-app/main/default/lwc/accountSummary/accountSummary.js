import { LightningElement, track} from 'lwc';
import fetchAccount from '@salesforce/apex/AccountRelatedObj.fetchAccount';
import fetchContact from '@salesforce/apex/AccountRelatedObj.getContacts';
import fetchOpportunity from '@salesforce/apex/AccountRelatedObj.fetchOpportunity';
import getClosedWonOpp from '@salesforce/apex/AccountRelatedObj.getClosedWonOpp';
import getClosedLostOpp from '@salesforce/apex/AccountRelatedObj.getClosedLostOpp';
import getAmountClosedWonOpp from  '@salesforce/apex/AccountRelatedObj.getAmountClosedWonOpp';
import fetchCase from  '@salesforce/apex/AccountRelatedObj.fetchCase';


export default class AccountSummary extends LightningElement {
   
    @track acc;
    @track con;
    message;
    msg;
    msg1;
    msg2;
    msg3;
    msg4;
    @track opp;
    @track closedwonofopp;
    @track closedlostopp;
    @track amountClosedWonOpp;
    @track cs;
    @track case;
    connectedCallback(){
                        fetchAccount()
                        .then(result => {
                                        this.acc = result;

                                        console.log(JSON.stringify(result));
                                        console.log("result",this.acc);
                                        })

                        }

    
    contactFetch(event){
                            this.message = event.target.value;
                            console.log('Contact Id-->'+this.message);
                            fetchContact({accountId : this.message})

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
                            this.msg1 = event.target.value;
                            console.log('Opportunity Id-->'+this.msg1);
                            getClosedWonOpp({accountId : this.msg1})
                            .then(result => {
                                              this.closedwonofopp = result;

                                              console.log(JSON.stringify(result));
                                              console.log("result3",this.closedwonofopp);
                                            })
                            .catch(error =>{
                                            this.error = error;

                                            })
                            this.msg2 = event.target.value;
                            console.log('Opportunity Id-->'+this.msg2);
                            getClosedLostOpp({accountId : this.msg2})
                            .then(result => {
                                              this.closedlostopp = result;

                                              console.log(JSON.stringify(result));
                                              console.log("result4",this.closedlostopp);
                                            })
                            .catch(error =>{
                                            this.error = error;

                                            })
                                            this.msg3 = event.target.value;
                                            console.log('Opportunity Id-->'+this.msg3);
                                            getAmountClosedWonOpp({accountId : this.msg3})
                                            .then(result => {
                                                              this.amountClosedWonOppp = result;
                
                                                              console.log(JSON.stringify(result));
                                                              console.log("result5",this.amountClosedWonOpp);
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
                                        }
}