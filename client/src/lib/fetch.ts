import { RepoSelected } from "../interface";
import { apiRequest } from "./api-request";

export const fetchCommit = async (selected: RepoSelected) => {
	const { first, second, name, mode } = selected;

  return {
      firstCard: await apiRequest([name, first, 'commits']),
      secondCard: mode ? await apiRequest([name, second, 'commits']) : null,
    };
   
};

export const fetchUserRepos = async (name: string) => {
  return await apiRequest(name)
}
