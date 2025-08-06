import { Student } from '../../app/models/Student';

export async function seedStudents() {
await Student.bulkCreate([
  { user_id: 3, status: 'active' },
  { user_id: 4, status: 'inactive' },
]);


  console.log('✅ Students seeded');
}
