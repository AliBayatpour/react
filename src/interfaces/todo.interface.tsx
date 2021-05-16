export interface TodoInterface {
  id?: string;
  taskName: string;
  taskSort: string;
  createdDt?: string;
  dueDt?: string;
  isCompleted?: true;
  isArchived?: true;
  todoCategoryId?: string;
  todoPriorityId?: string;
}
