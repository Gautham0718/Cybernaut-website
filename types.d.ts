export interface VariantsType {
  inactive: {
    opacity: number;
    x: number;
    transition: {
      duration: number;
      ease: string;
    };
  };
  out: {
    opacity: number;
    x: number;
    transition: {
      duration: number;
      ease: string;
    };
  };
  in: {
    opacity: number;
    x: number;
    transition: {
      duration: number;
      ease: string;
    };
  };
}

export interface MessageDataType {
  email: string;
  message?: string;
  name: string;
  phone: string;
}
