import { Post } from "@nestjs/common";
import {POST_REPOSITORY} from '../../core/constants'

export const postsProviders = [{
    provide: POST_REPOSITORY,
    useValue: Post,
}]