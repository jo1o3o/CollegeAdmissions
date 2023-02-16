import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  student: Student;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService) {
      this.student = new Student();
    }

  onSubmit() {
    this.studentService.save(this.student).subscribe(result =>
      this.goToStudentList());
  }

  goToStudentList() {
    this.router.navigate(['/students']);
  }
}