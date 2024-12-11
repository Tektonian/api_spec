import { ReqStudentProfile, ResStudentProfile } from "../../types/service/Student";
import { RequestHandler } from 'express';
import { Tspec } from 'tspec';

export type StudentAPISpec = Tspec.DefineApiSpec<{
    tags: ['Student']
    basePath: '/api/students',
    paths: {
      '/:student_id': {
        get: {
          summary: 'Get student profile',
          description: 'Get student profile'
          handler: RequestHandler<ReqStudentProfile, ResStudentProfile>,
        },
      },
    },
  }>;

