"use client"
import React from 'react'
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from '../ui/button';
import './add-snippet.css';
import { AddSnippetToDB } from '@/lib/actions/snippet';
import { useUser } from '@clerk/clerk-react'
import { to } from 'react-spring';
import toast from 'react-hot-toast';

const AddSnippet = () => {
    const [name, setName] = React.useState<string>('');
    const [language, setLanguage] = React.useState<string>('');
    const [content, setContent] = React.useState<string>('');

    const {user} = useUser();
    function saveSnippet(){
        if (!user) return;
        try {
        AddSnippetToDB(name, content, user.id, language);
        toast.success('Snippet added successfully');
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
          <Dialog.Root>
              <Dialog.Trigger asChild>
                  <Button className="Button violet">Add New Snippet</Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                  <Dialog.Overlay className="DialogOverlay" />
                  <Dialog.Content className="DialogContent">
                      <Dialog.Title className="DialogTitle">Add Snippet</Dialog.Title>
                      <Dialog.Description className="DialogDescription">
                          Add new snippet here. Click save when you're done.
                      </Dialog.Description>
                      <fieldset className="Fieldset">
                          <label className="Label" htmlFor="name">
                              Name
                          </label>
                          <input className="Input" onChange={()=> setName} id="name" defaultValue="Snippet Name" />
                      </fieldset>
                      <fieldset className="Fieldset">
                          <label className="Label" htmlFor="language">
                              Language
                          </label>
                          <input className="Input" onChange={() => setLanguage} id="language" defaultValue="typescript" />
                      </fieldset>
                      <fieldset className="Fieldset">
                          <label className="Label" htmlFor="username">
                              Content
                          </label>
                          <input className="textarea" onChange={() => setContent} id="content" defaultValue="Snippet Code Here" />
                      </fieldset>
                      <div
                          style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
                      >
                         
                              <Button onClick={saveSnippet} className="Button green">Save changes</Button>
                          
                      </div>
                      <Dialog.Close asChild>
                          <button className="IconButton" aria-label="Close">
                              <Cross2Icon />
                          </button>
                      </Dialog.Close>
                  </Dialog.Content>
              </Dialog.Portal>
          </Dialog.Root>
    </div>
  )
}
export default AddSnippet;