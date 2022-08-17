const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

const giveParcel = (name) => {
   alert(`${peopleWaiting.shift()} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)
   
}
const leaveQueueWithoutParcel = () => {
   alert(`${peopleWaiting.pop()} не получил(а) посылку и ушел(ла) из очереди.`);
}

giveParcel()
giveParcel()
giveParcel()
leaveQueueWithoutParcel()
leaveQueueWithoutParcel()
leaveQueueWithoutParcel()
leaveQueueWithoutParcel()





console.log(peopleWaiting);