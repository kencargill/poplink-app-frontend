import { Profile } from '../types/profile.types';

interface ProfileUpdateParams {
  id: string;
  data: Partial<Profile>;
}

export async function getUserProfiles(userId: string) {}

export async function getProfile(id: string) {}

export async function getProfileByUsername(profileUsername: string) {}

export async function addProfile(data: Partial<Profile>) {}

export async function updateProfile({ id, data }: ProfileUpdateParams) {}

export async function deleteProfile(id: string) {}
