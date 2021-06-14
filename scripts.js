let activities = {
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    addActivity: function() {
        let day = document.querySelector('#dayOfWeek').value;
        let activity = document.querySelector('#newActivity').value;
        if (activity === ''){
            return;
        }
        this[day].push(activity);
        this.displayActivities(day);
        document.querySelector('#newActivity').value = '';
    },
    displayActivities: function(day) {
       document.querySelector('#activitiesList').innerHTML = '';
        for (let i = 0; i < this[day].length; i++) {
            let newActivity = document.createElement('li');
            newActivity.id = 'activity' + i;
            newActivity.innerHTML = this[day][i];
            newActivity.setAttribute('onclick', 'deleteActivity(this)');
            document.querySelector('#activitiesList').appendChild(newActivity);
            let toolTip = document.createElement('span');
            toolTip.innerHTML = "delete";
            toolTip.setAttribute('class', 'tooltip')
            newActivity.appendChild(toolTip);
        } 
        this.weekPlans(day);
    }, 
    switchDay: function() {
        let day = document.querySelector('#dayOfWeek').value;
        activities.displayActivities(day);
    },
    weekPlans: function(day) {
        let ul = document.getElementById(day);
        ul.innerHTML = '';
        for (let i = 0; i < activities[day].length; i++) {
            let li = document.createElement('li');
            li.innerHTML = activities[day][i];
            ul.appendChild(li);
        }
    }
}
document.querySelector('#dayOfWeek').addEventListener('input', activities.switchDay);
function deleteActivity(el) {
    let elValue = el.innerHTML;
    let day = document.querySelector('#dayOfWeek').value;
    let daySelected = activities[day];
    let index = daySelected.indexOf(elValue);
    el.remove();
    activities[day].splice(index, 1);
}