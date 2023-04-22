import { Link } from '../types/link.types';
import { axios } from '../libs/axios';

interface LinkUpdateParams {
  id: string;
  data: Partial<Link>;
}

export async function getProfileLinks(profileId: string) {}

export async function getLink(id: string) {}

export async function getLinksByUsername(profileUsername: string) {}

export async function addLink(data: Partial<Link>) {}

export async function updateLink({ id, data }: LinkUpdateParams) {}

export async function deleteLink(id: string) {}
