let tasks = [];
let keepAsking = 1;
while (keepAsking == 1) {
   let choice = prompt("enter your choice. \n1. Add Task\n2.Delete Task\n3. View Task\n4.Exit");

   
   if (choice == 4) {
      keepAsking = 0;
   }
   if (choice == 1) {
      let task = prompt("enter your task");
      tasks.push(task);
      alert("task added");

   }
   if (choice == 2) {
    
      let index = prompt("enter task number to delete");
      tasks.splice(index,1);
      alert("task deleted");
   }
   if(choice==3) {
   
    alert(tasks);
   }
   
}

