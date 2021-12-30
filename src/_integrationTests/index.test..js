import moxios from "moxios";
import { testStore } from "./../../Utils";
import { fetchPosts } from "./../actions";

describe("fetchPosts action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is updated correctly", () => {
    const expectedState = [
      {
        title: "example Title 1",
        body: "some Text",
      },
      {
        title: "example Title 2",
        body: "some Text",
      },
      {
        title: "example Title 3",
        body: "some Text",
      },
    ];

    const store = testStore();
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: expectedState,
      });
    });
    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
