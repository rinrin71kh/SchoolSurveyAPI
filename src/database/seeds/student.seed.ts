import { User } from '../../app/models/User';
import { Student } from '../../app/models/Student';

export async function seedStudents() {
  // Get the student users by email
  const student1 = await User.findOne({ where: { email: 'student1@example.com' } });
  const student2 = await User.findOne({ where: { email: 'student2@example.com' } });

  if (!student1 || !student2) {
    throw new Error('Required student users not found');
  }

  await Student.bulkCreate([
    {
      user_id: student1.id,
      status: 'active',
    },
    {
      user_id: student2.id,
      status: 'inactive',
    },
  ]);

  console.log('✅ Students seeded');
}
