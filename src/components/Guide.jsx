import Section from "./Section";

export default function Guide() {
  return (
    <main className="px-20 pt-4">
      <Section
        title="Create"
        description="Creates an empty Git repository in the current folder."
        command="git init"
      />
      <Section
        title="Rename"
        description="Renames the current branch to main."
        command="git branch -M main"
      />
      <Section
        title="Upload"
        description="Sends the main branch to the remote named origin."
        command="git push -u origin main"
      />
    </main>
  );
}