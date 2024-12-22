import React from 'react'

type Props = {}

const SnippetVersions = (props: Props) => {
    //const fetchVersionHistory = async (snippetId: number) => {
        // const { data } = await supabase
        //   .from("snippet_versions")
        //   .select("*")
        //   .eq("snippet_id", snippetId);
        // setVersionHistory(data || []);
    //};

    //   const updateSnippet = async () => {
    // if (!editingSnippet) return;

    // Save current version as history
    // const { error: versionError } = await supabase.from("snippet_versions").insert([
    //   {
    // snippet_id: editingSnippet.id,
    // title: editingSnippet.title,
    // content: editingSnippet.content,
    // version: versionHistory.length + 1,
    //   },
    // ]);

    // Update current snippet
    // const { error: updateError } = await supabase
    //   .from("snippets")
    //   .update({ title: newTitle, content: newContent })
    //   .eq("id", editingSnippet.id);

    // if (updateError || versionError) alert("Error saving version");
    // else {
    // //   setEditingSnippet(null);
    // //   fetchCollections();
    // }

return (
    <div>
        <h3 className="text-lg font-semibold mt-4">Version History</h3>
        {/* <ul className="space-y-2">
              {versionHistory.map((version) => (
                <li key={version.id} className="text-sm">
                  Version {version.version}: {version.content}
                </li>
              ))}
            </ul> */}
    </div>
)
}