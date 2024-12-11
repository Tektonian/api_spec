import { RequestHandler } from 'express';
import { ReqSearchSchool, ResSearchSchool } from '../../types/search/School';
import { Tspec } from 'tspec';

export type SearchSchoolAPISpec = Tspec.DefineApiSpec<{
    tags: ['Search School']
    basePath: '/api/search/schools',
    paths: {
      '/': {
        get: {
          summary: 'Get recommended student list',
          description: 'Get Recommend student list by request_id'
          handler: RequestHandler<ReqSearchSchool, ResSearchSchool>,
        },
      },
    },
  }>;

