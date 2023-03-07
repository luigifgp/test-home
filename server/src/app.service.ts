import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { catchError, map, Observable } from 'rxjs';
import { ResponseData } from '../src/interfaces';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  private data = {};
  private url = 'https://api.github.com';
  constructor(private httpService: HttpService) {}

  // handle API request
  private http(url: string): Observable<AxiosResponse<ResponseData[]>> {
    return this.httpService.get(url).pipe(
      catchError((e) => {
        throw new HttpException(e.response.data, e.response.status);
      }),
    );
  }

  getUserRepos(params): any {
    const { user } = params;
    return this.http(`${this.url}/users/${user}/repos`).pipe(
      map((response) => response.data),
      map((data) =>
        data.map((d) => ({
          name: d.name,
          owner: d.owner,
          fullName: d.full_name,
          url: d.html_url,
          created: d.created_at,
          updated: d.update_at,
          size: d.size,
        })),
      ),
    );
  }

  getRepo(params: { user: string; repo: string }): any {
    const { user, repo } = params;
    return this.http(`${this.url}/repos/${user}/${repo}`).pipe(
      map((response) => response.data),
      map((data) =>
        data.map((d) => ({
          name: d.name,
        })),
      ),
    );
  }

  getRepoData(params: { user: string; repo: string; search: string }) {
    const { user, repo, search } = params;
    return this.http(`${this.url}/repos/${user}/${repo}/${search}`).pipe(
      map((response) => response.data),
      map((data) =>
        data.map((d) => ({
          committer: d.commit.committer,
          message: d.commit.message,
          tree: d.commit.tree,
          url: d.html_url,
          user: d.committer.login,
          date: d.commit.author.date,
        })),
      ),
    );
  }
}
