import { NextResponse } from 'next/server';

const nurses = [
  { id: 1, name: 'محمود سعيد', specialty: 'عناية مركزة', experience: 5 },
  { id: 2, name: 'آية علي', specialty: 'باطنة', experience: 3 },
];

export async function POST(request: Request) {
  const { specialty, minExperience } = await request.json();
  const filtered = nurses.filter((nurse) =>
    (!specialty || nurse.specialty === specialty) &&
    (!minExperience || nurse.experience >= minExperience)
  );
  return NextResponse.json(filtered);
}
