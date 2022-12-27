// Function created only to test if the export and import was working fine.
const testeFunction = () => {
    alert("blablabla");
  };
  
  /*************************************************************************************************************************/
  /**********************************   ENABLING THE PROPOSAL FORM IN THE PAGE NEEDS/SHOW **********************************/
  /*************************************************************************************************************************/
  
   /*  Finds the edit button in the pages needs/show and add an event listener wich on click
  calls the enabling edit form function (enableProposalForm), above declared */
  const addEventListenerToEditButtom = () => {
    // Find the edit button
    const editButton = document.getElementById('edit-button');
    // If the button was find in the page, add the listener to the clic event
    /* This check is necessary, since this function runs in every page. If we are in a page in which
    the button doesn't exist, the lister should not be added to te button */
    if (editButton){
      editButton.addEventListener('click', enableProposalForm);
    };
  };
  /*************************************************************************************************************************/
  /**************************************************    END   *************************************************************/
  /*************************************************************************************************************************/
 
  
  /*************************************************************************************************************************/
  /**************************************************    END   *************************************************************/
  /*************************************************************************************************************************/
  
  export { testeFunction, addEventListenerToEditButtom}
  
  //const change
  