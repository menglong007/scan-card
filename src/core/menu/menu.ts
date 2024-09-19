export interface MenuItem {
  name: string;
  icon: string;
  path: string;
}

export const MenuItems: MenuItem[] = [
  {
    name: 'Major',
    icon: 'thumbs_up_down',
    path: 'major',
  },
  {
    name: 'Faculty',
    icon: 'key',
    path: 'factory',
  },
  {
    name: 'Department',
    icon: 'domain',
    path: 'department',
  },

];
