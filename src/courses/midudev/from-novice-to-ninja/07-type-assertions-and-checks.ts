// 🧠 TYPE ASSERTIONS
// Type assertions allow us to tell TypeScript the specific type of a value
// This is especially useful when dealing with the DOM.

// Example: get a <button> element
const button = document.querySelector('button')

// TypeScript infers: HTMLElement | null
// So we can’t safely access button-specific methods like `.disabled`

// ❌ Not valid:
// button.disabled = true

// ✅ We can assert it as a HTMLButtonElement
const typedButton = document.querySelector('button') as HTMLButtonElement
typedButton.disabled = true

// BUT! Be careful: you lose null checking with 'as' if the element doesn't exist.
// So always guard it or use narrowing with instanceof

// ❌ This would crash at runtime if the element is null
// document.getElementById('btn')!.disabled = true // risky!

// ✅ Safe way using instanceof
const canvas = document.querySelector('canvas')
if (canvas instanceof HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')
  console.log(ctx)
}

// BUT WHY?
// Because in this part: `if (canvas instanceof HTMLCanvasElement)`,
// TypeScript applies something called "type narrowing".
//
// When TypeScript sees the condition with `instanceof`, it knows that inside the block,
// the variable `canvas` is no longer of type `HTMLElement | null`, but specifically `HTMLCanvasElement`.
//
// This works at runtime because `instanceof` checks if the object is an instance of the given constructor.
// In this case, it confirms that `canvas` is truly an instance of HTMLCanvasElement.
//
// That’s why inside the `if`, we can safely access canvas-specific methods like `.getContext()`
// without any TypeScript errors or unsafe assertions.
//
// Example:
//
// Outside the if:
//    canvas: HTMLElement | null
//
// Inside the if (after narrowing):
//    canvas: HTMLCanvasElement

// -----------------------------------------------------------
// 🧪 Example with input

const input = document.querySelector('input')

if (input instanceof HTMLInputElement) {
  input.value = 'RendonnM'
  input.focus()
}

// -----------------------------------------------------------
// 📘 Common HTML element types in TypeScript:
//
// | HTML Element     | TypeScript Type         | Useful Properties / Methods        |
// |------------------|--------------------------|------------------------------------|
// | <a>              | HTMLAnchorElement        | .href, .target                     |
// | <audio>          | HTMLAudioElement         | .play(), .pause()                  |
// | <button>         | HTMLButtonElement        | .disabled, .click()                |
// | <canvas>         | HTMLCanvasElement        | .getContext()                      |
// | <form>           | HTMLFormElement          | .submit(), .reset()                |
// | <img>            | HTMLImageElement         | .src, .alt                         |
// | <input>          | HTMLInputElement         | .value, .checked                   |
// | <label>          | HTMLLabelElement         | .htmlFor                           |
// | <li>             | HTMLLIElement            | .value                             |
// | <select>         | HTMLSelectElement        | .value, .options                   |
// | <textarea>       | HTMLTextAreaElement      | .value                             |
// | <table>          | HTMLTableElement         | .rows, .caption                    |
// | <tr>             | HTMLTableRowElement      | .cells                             |
// | <td>, <th>       | HTMLTableCellElement     | .cellIndex                         |
// | <video>          | HTMLVideoElement         | .play(), .currentTime              |
// | <iframe>         | HTMLIFrameElement        | .src, .contentWindow               |
// | <div>, <span>    | HTMLDivElement, HTMLSpanElement | Structure only (no special methods) |

// -----------------------------------------------------------
// 🔍 Difference between typeof and instanceof

// ✅ typeof
// Used to check **primitive types**: 'string', 'number', 'boolean', 'undefined', 'object', 'function', 'symbol', 'bigint'

const age = 22

if (typeof age === 'number') {
  console.log('✅ age is a number')
}

// typeof is great for basic values like strings, numbers, booleans, etc.

const sayHi = () => console.log('Hi!')

if (typeof sayHi === 'function') {
  sayHi()
}

// ❌ typeof won't work properly with DOM elements or class instances

// ✅ instanceof
// Used to check if an object is an instance of a **class or constructor function**

const input2 = document.querySelector('input')

if (input2 instanceof HTMLInputElement) {
  input2.value = 'Santiago'
  input2.focus()
}

// instanceof is ideal for checking DOM elements or class instances

class Person {
  constructor(public name: string) {}
}

const me = new Person('Santiago')

if (me instanceof Person) {
  console.log(`✅ Yes, ${me.name} is a Person`)
}

// -----------------------------------------------------------
// 🌐 Fetching data with TypeScript + Type Assertion

const API_URL = 'https://api.github.com/search/repositories?q=typescript'

// Define the shape of each repo in the API response
interface Repo {
  id: number
  name: string
  html_url: string
  description: string
  stargazers_count: number
  language: string
}

// Define the shape of the full API response
interface GitHubAPIResponse {
  total_count: number
  items: Repo[]
}

const response = await fetch(API_URL)

if (!response.ok) {
  throw new Error('❌ Request failed')
}

// Type assertion here: we know what the structure of the JSON is
const data = (await response.json()) as GitHubAPIResponse

// Now we have proper typing & autocomplete
data.items.forEach((repo) => {
  console.log(
    `📦 ${repo.name} (${repo.language}) - ⭐ ${repo.stargazers_count}`
  )
})

// 💡 Tip: Use [https://quicktype.io](https://quicktype.io) to quickly generate
// TypeScript types from large API responses instead of typing them by hand:
// export interface GithubAPIResponse {
//   total_count:        number;
//   incomplete_results: boolean;
//   items:              Item[];
// }

// export interface Item {
//   id:                          number;
//   node_id:                     string;
//   name:                        string;
//   full_name:                   string;
//   private:                     boolean;
//   owner:                       Owner;
//   html_url:                    string;
//   description:                 string;
//   fork:                        boolean;
//   url:                         string;
//   forks_url:                   string;
//   keys_url:                    string;
//   collaborators_url:           string;
//   teams_url:                   string;
//   hooks_url:                   string;
//   issue_events_url:            string;
//   events_url:                  string;
//   assignees_url:               string;
//   branches_url:                string;
//   tags_url:                    string;
//   blobs_url:                   string;
//   git_tags_url:                string;
//   git_refs_url:                string;
//   trees_url:                   string;
//   statuses_url:                string;
//   languages_url:               string;
//   stargazers_url:              string;
//   contributors_url:            string;
//   subscribers_url:             string;
//   subscription_url:            string;
//   commits_url:                 string;
//   git_commits_url:             string;
//   comments_url:                string;
//   issue_comment_url:           string;
//   contents_url:                string;
//   compare_url:                 string;
//   merges_url:                  string;
//   archive_url:                 string;
//   downloads_url:               string;
//   issues_url:                  string;
//   pulls_url:                   string;
//   milestones_url:              string;
//   notifications_url:           string;
//   labels_url:                  string;
//   releases_url:                string;
//   deployments_url:             string;
//   created_at:                  Date;
//   updated_at:                  Date;
//   pushed_at:                   Date;
//   git_url:                     string;
//   ssh_url:                     string;
//   clone_url:                   string;
//   svn_url:                     string;
//   homepage:                    null | string;
//   size:                        number;
//   stargazers_count:            number;
//   watchers_count:              number;
//   language:                    null | string;
//   has_issues:                  boolean;
//   has_projects:                boolean;
//   has_downloads:               boolean;
//   has_wiki:                    boolean;
//   has_pages:                   boolean;
//   has_discussions:             boolean;
//   forks_count:                 number;
//   mirror_url:                  null;
//   archived:                    boolean;
//   disabled:                    boolean;
//   open_issues_count:           number;
//   license:                     License | null;
//   allow_forking:               boolean;
//   is_template:                 boolean;
//   web_commit_signoff_required: boolean;
//   topics:                      string[];
//   visibility:                  Visibility;
//   forks:                       number;
//   open_issues:                 number;
//   watchers:                    number;
//   default_branch:              DefaultBranch;
//   score:                       number;
// }

// export enum DefaultBranch {
//   Dev = "dev",
//   Develop = "develop",
//   Main = "main",
//   Master = "master",
//   V2 = "v2",
// }

// export interface License {
//   key:     Key;
//   name:    Name;
//   spdx_id: SpdxID;
//   url:     null | string;
//   node_id: NodeID;
// }

// export enum Key {
//   Apache20 = "apache-2.0",
//   CcBy40 = "cc-by-4.0",
//   MIT = "mit",
//   Other = "other",
//   Unlicense = "unlicense",
// }

// export enum Name {
//   ApacheLicense20 = "Apache License 2.0",
//   CreativeCommonsAttribution40International = "Creative Commons Attribution 4.0 International",
//   MITLicense = "MIT License",
//   Other = "Other",
//   TheUnlicense = "The Unlicense",
// }

// export enum NodeID {
//   MDc6TGljZW5ZZTA = "MDc6TGljZW5zZTA=",
//   MDc6TGljZW5ZZTE1 = "MDc6TGljZW5zZTE1",
//   MDc6TGljZW5ZZTEz = "MDc6TGljZW5zZTEz",
//   MDc6TGljZW5ZZTI = "MDc6TGljZW5zZTI=",
//   MDc6TGljZW5ZZTI1 = "MDc6TGljZW5zZTI1",
// }

// export enum SpdxID {
//   Apache20 = "Apache-2.0",
//   CcBy40 = "CC-BY-4.0",
//   MIT = "MIT",
//   Noassertion = "NOASSERTION",
//   Unlicense = "Unlicense",
// }

// export interface Owner {
//   login:               string;
//   id:                  number;
//   node_id:             string;
//   avatar_url:          string;
//   gravatar_id:         string;
//   url:                 string;
//   html_url:            string;
//   followers_url:       string;
//   following_url:       string;
//   gists_url:           string;
//   starred_url:         string;
//   subscriptions_url:   string;
//   organizations_url:   string;
//   repos_url:           string;
//   events_url:          string;
//   received_events_url: string;
//   type:                Type;
//   user_view_type:      Visibility;
//   site_admin:          boolean;
// }

// export enum Type {
//   Organization = "Organization",
//   User = "User",
// }

// export enum Visibility {
//   Public = "public",
// }
// -----------------------------------------------------------
// 📌 Summary:
//
// - Avoid blindly using `as` unless you're sure of the element type
// - Use `instanceof` to safely narrow DOM element types at runtime
// - Always consider that `getElementById` may return `null`
// Keep this file as a module to avoid variable conflicts and allow top-level await
export {}
