import classes from "./Layout.module.scss";
import { ReactNode } from 'react';

import MainNavigation from "./MainNavigation";

type Props = {
  children: ReactNode
};
function Layout({ children }: Props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
}

export default Layout;
