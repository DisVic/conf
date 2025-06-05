export interface CakeProps {
  color: string;
}

export interface MenuItem {
  name: string;
  color: string;
  ico: React.FC<CakeProps>;
}
