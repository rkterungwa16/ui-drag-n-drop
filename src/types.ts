export interface ListItemsInterface {
  id: string;
  description: string;
}

export interface ListInterface {
  id: string;
  title: string;
  items: ListItemsInterface[];
}
