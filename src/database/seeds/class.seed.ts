import { Class } from '../../app/models/Class';
import { User } from '../../app/models/User';
import { Student } from '../../app/models/Student';

export async function seedClasses() {
  // Get users first
  const student1User = await User.findOne({ where: { email: 'student1@example.com' } });
  const student2User = await User.findOne({ where: { email: 'student2@example.com' } });

  if (!student1User || !student2User) {
    throw new Error('Required student users not found');
  }

  // Then get their corresponding student records
  const student1 = await Student.findOne({ where: { user_id: student1User.id } });
  const student2 = await Student.findOne({ where: { user_id: student2User.id } });

  if (!student1 || !student2) {
    throw new Error('Required student records not found');
  }

  // Now seed classes using correct student IDs
  await Class.bulkCreate([
    {
      student_id: student1.id,
      class_name: 'Web Development',
      academic_year: '2024-2025',
    },
    {
      student_id: student2.id,
      class_name: 'Computer Networks',
      academic_year: '2024-2025',
    },
  ]);

  console.log('✅ Classes seeded');
}
