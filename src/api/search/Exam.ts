import { RequestHandler } from 'express';
import { ReqSearchExam, ResSearchExam } from '../../types/search/Exam';
import { Tspec } from 'tspec';

export type SearchExamAPISpec = Tspec.DefineApiSpec<{
    tags: ['Search School']
    basePath: '/api/search/exams',
    paths: {
      '/': {
        get: {
          summary: 'Get exam data list',
          description: 'Get all exam data list'
          handler: RequestHandler<undefined, ResSearchExam>,
        },
      },
    },
  }>;