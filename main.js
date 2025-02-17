// Tran Hoang Tin 2180604446
class Student {
    constructor(name, age, score1, score2) {
        this.name = name;
        this.age = age;
        this.score1 = score1;
        this.score2 = score2;
    }

   
    getAverage() {
        return (this.score1 + this.score2) / 2;
    }

    
    getRank() {
        const avg = this.getAverage();
        if (avg >= 8.5) return "Giỏi";
        if (avg >= 6.5) return "Khá";
        if (avg >= 5) return "Trung Bình";
        return "Yếu";
    }
}


const students = [
    new Student("Tran Hoang Tin", 19, 8, 9),
    new Student("Nguyen Hoang Phi Long", 20, 6, 7),
    new Student("Trinh Huu Hoang Anh", 17, 5, 5),
    new Student("Phạm Quoc Trung", 18, 9, 8)
];


console.log("Xếp loại của từng sinh viên:");
students.map(student => console.log(`${student.name}: ${student.getRank()}`));


const totalAverage = students.reduce((sum, student) => sum + student.getAverage(), 0) / students.length;
console.log(`Điểm trung bình cộng của lớp: ${totalAverage.toFixed(2)}`);


const hasUnder18 = students.some(student => student.age < 18);
console.log(`Có sinh viên nào dưới 18 tuổi không? ${hasUnder18 ? "Có" : "Không"}`);


const allHaveNames = students.every(student => student.name.trim() !== "");
console.log(`Cả lớp có đầy đủ tên không? ${allHaveNames ? "Có" : "Không"}`);
