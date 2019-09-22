import { Project_project, ProjectVariables } from '../../types/Project';
interface HandlerEvent {
    arguments: ProjectVariables;
}
export declare const handler: (event: HandlerEvent) => Promise<Project_project | {
    data: any;
    errorMessage: string;
    errorType: string;
}>;
export {};
