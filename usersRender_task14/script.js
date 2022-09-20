const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};
// for (let key in gradation){
// 	console.log(key)
// }

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];

class User{
    constructor(obj){
        Object.assign(this, obj)
    }

    render(){
		let divInfo = `<div class="user__info">
			<div class="user__info--data">
				<img src="images/users/${this.img}.png" alt="${this.name}" height="50">
				<div class="user__naming">
					<p>Name: <b>${this.name}</b></p>
					<p>Age: <b>${this.age}</b></p>
				</div>
			</div>
			<div class="user__info--role ${this.role}">
				<img src="images/roles/${this.role}.png" alt="${this.role}" height="25">
				<p>${this.role}</p>
			</div>
		</div>`

		let divCourse;
		if (this.courses){
			divCourse = this.renderCourses();
		}

		return `<div class="user">${divInfo} ${divCourse}</div>`
	}

    renderCourses(){
		return `<div class="user__courses">
		<p class="user__courses--course ${this.role} ">Front-end Pro <span class="satisfactory">satisfactory</span></p>
	</div>`
	}
}

class Student extends User{
    constructor(obj){
        super(obj);
    }
}

class Lector extends User{
    constructor(obj){
        super(obj);
    }
}

class Admin extends User{
    constructor(obj){
        super(obj);
    }
}

const ROLE_TYPES = {
    student: user => new Student(user),
    admin: user => new Admin(user),
    lector: user => new Lector(user)
}

let objectsOfUsers = users
    .map(user => ROLE_TYPES[user.role] ? ROLE_TYPES[user.role](user) : new User(user))
	.map(user => user.render())
	.join(``);

//console.log(objectsOfUsers)

document.write(`<div class="users">${objectsOfUsers}</div>`)


