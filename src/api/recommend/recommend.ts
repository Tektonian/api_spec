import { RequestHandler } from 'express';
import { ReqRecommendStudent, ResRecommendStudent } from '../../types/recommend/recommend';
import { ReqRecommendRequest, ResRecommendRequest } from '../../types/recommend/recommend';
import { Tspec } from 'tspec';

export type RecommendAPISpec = Tspec.DefineApiSpec<{
    tags: ['Recommend']
    basePath: '/api/recommend',
    paths: {
      '/students': {
        post: {
          summary: 'Get recommended student list',
          description: 'Get Recommend student list by request_id'
          handler: RequestHandler<undefined, ResRecommendStudent, ReqRecommendStudent>,
        },
      },
      '/requests': {
        post: {
            summary: "Get recommended request list"
            description: 'Get recommended Request list by student_id',
            handler: RequestHandler<undefined, ResRecommendRequest, ReqRecommendRequest>,
        }
      }
    },
  }>;

