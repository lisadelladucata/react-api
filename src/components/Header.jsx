import Button from "./Button";
export default function Header({ links, fetchPosts }) {
  return (
    <>
      <div className="header">
        <img
          src="https://logos-world.net/wp-content/uploads/2021/02/Dragon-Ball-Logo-1996-present.png"
          alt="logo"
        />
        <div className="btn">
          <Button
            onClick={() => fetchPosts(links.previous)}
            className="previous"
            disabled={links.previous === ""}>
            PREV PAGE
          </Button>
          <Button
            onClick={() => fetchPosts(links.next)}
            disabled={links.next === ""}
            className="next">
            NEXT PAGE
          </Button>
        </div>
      </div>
    </>
  );
}
