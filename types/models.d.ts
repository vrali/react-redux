/** TodoMVC model definitions **/

declare interface Login {
  id?: TodoItemId;
  text?: string;
  completed?: boolean;
}

declare type TodoItemId = number;

declare type TodoFilterType = "SHOW_ALL" | "SHOW_ACTIVE" | "SHOW_COMPLETED";

// declare type TodoStoreState = TodoItemData[];

declare interface User {
  isAuthenticated: boolean;
  firstName: String;
  lastName: String;
  emailAddress: String;
  claims?: {
    isAdmin: boolean;
  };
  authError?: string;
}

declare interface AuthResponse {
  token: string;
  user: User;
}

declare interface LoginPayLoad {
  userName: string;
  password: string;
}
