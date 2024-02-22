import {UserModule} from "../member/userModule";
import {CompetitionModule} from "../competition/competition.module";


export interface RankingModuleResponse {
  id: number;
  rank: number;
  score: number;
  user: UserModule;
  competition: CompetitionModule;
}

