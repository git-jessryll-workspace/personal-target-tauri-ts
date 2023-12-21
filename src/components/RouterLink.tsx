import { FC, memo } from "react";
import { LinkProps, Link} from "react-router-dom";


interface MemoizedLinkProps extends LinkProps {}

const LinkComponent: FC<MemoizedLinkProps> = ({ ...props }) => {
  return <Link {...props} className="font-semibold border-b"/>;
};

const RouterLink = memo(
  LinkComponent,
  (prevProps: MemoizedLinkProps, nextProps: MemoizedLinkProps) =>
    prevProps.to === nextProps.to
);

export default RouterLink;
