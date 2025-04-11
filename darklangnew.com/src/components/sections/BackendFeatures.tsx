import React, { useState, useEffect } from "react";
import SectionTitle from "../ui/SectionTitle";
import hljs from 'highlight.js/lib/core';
import fsharp from 'highlight.js/lib/languages/fsharp';
import CodeDisplay from '../ui/CodeDisplay';

// Register the F# language with highlight.js
hljs.registerLanguage('fsharp', fsharp);

// Define the Feature Button component
interface FeatureButtonProps {
  icon: string;
  isMonoFont?: boolean;
  label: string;
  isActive: boolean;
  hasDropdown?: boolean;
  onClick: () => void;
}

const FeatureButton: React.FC<FeatureButtonProps> = ({
  icon,
  isMonoFont = false,
  label,
  isActive,
  hasDropdown = false,
  onClick
}) => {
  return (
    <div
      className={`flex items-center p-3 rounded-lg border cursor-pointer
                 ${isActive
          ? 'bg-purple-50 border-purple-200 shadow-sm'
          : 'bg-white border-gray-200 shadow-sm'}`}
      onClick={onClick}
    >
      <span className={`text-purple-lbg mr-2 ${isMonoFont ? 'font-mono' : ''}`}>{icon}</span>
      <span className="font-medium">{label}</span>
      {hasDropdown && <span className="ml-1 text-gray-500">▾</span>}
    </div>
  );
};



// Define the code examples for each feature
const codeExamples = {
  httpHandler: `[<HttpHandler("GET", "/hello")>]
let _handler _req =
  let message = "Hello, World!"
  let body =
    message
  |> Stdlib.String.toBytes
 
  Stdlib.Http.response body 200L`,

  dataStores: `[<Model>]
type User = {
  id: UUID
  username: String
  email: String
  createdAt: Date
}

let getUser (id: UUID) : Option<User> =
  DB.findOne<User>("users", { id })
  
let createUser (username: String) (email: String) : User =
  let user = {
    id = UUID.generate()
    username = username
    email = email
    createdAt = Date.now()
  }
  DB.insert "users" user
  user`,

  scheduledJobs: `[<ScheduledJob(interval = "1 day")>]
let dailyReport () =
  let users = DB.query "SELECT COUNT(*) FROM users"
  let active = DB.query "SELECT COUNT(*) FROM sessions WHERE active = true"
  
  Email.send {
    to = "admin@example.com"
    subject = "Daily Report"
    body = $"Users: {users}\nActive: {active}"
  }`,

  backgroundWorkers: `[<QueueWorker("image-processing")>]
let processImage (data: { imageId: UUID }) =
  let image = Storage.get data.imageId
  
  let resized = Image.resize image {
    width = 800
    height = 600
  }
  
  Storage.put ($"{data.imageId}_thumbnail") resized
  DB.update "images" { id = data.imageId } { status = "processed" }`
};

const BackendFeatures: React.FC = () => {
  // State to track the currently selected feature
  const [selectedFeature, setSelectedFeature] = useState<keyof typeof codeExamples>('httpHandler');

  // Get the code for the currently selected feature
  const currentCode = codeExamples[selectedFeature];

  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
        <div className="mb-8">
          <SectionTitle subtitle="Darklang Cloud">Build a complete backend with Darklang</SectionTitle>

          <p className="text-lg md:text-xl max-w-6xl text-dark">
            Darklang lets you easily develop backend cloud applications. You can build tiny applications to connect two services, or
            large scale applications with tens of thousands of users. Code is written in collaboration with AI and is instantly and
            safely deployed on our hosted platform or yours, so you can focus on writing code while we handle the rest
          </p>

          <p className="text-xl mt-8 text-black-custom">
            You can build any backend that need:
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-4 mb-8 max-w-5xl justify-center mx-auto">
            <FeatureButton
              icon="://"
              isMonoFont={true}
              label="Http Handler"
              isActive={selectedFeature === 'httpHandler'}
              hasDropdown={true}
              onClick={() => setSelectedFeature('httpHandler')}
            />

            <FeatureButton
              icon="🗄"
              label="Data stores"
              isActive={selectedFeature === 'dataStores'}
              onClick={() => setSelectedFeature('dataStores')}
            />

            <FeatureButton
              icon="⏱"
              label="Scheduled jobs"
              isActive={selectedFeature === 'scheduledJobs'}
              onClick={() => setSelectedFeature('scheduledJobs')}
            />

            <FeatureButton
              icon="↻"
              label="Background workers"
              isActive={selectedFeature === 'backgroundWorkers'}
              onClick={() => setSelectedFeature('backgroundWorkers')}
            />
          </div>

          <div className="bg-white rounded-4xl shadow-lg inset-shadow-xs overflow-hidden mb-8 max-w-5xl mx-auto">
            <div className="flex justify-end items-center px-8 pt-8">
              <div className="flex space-x-2">
                <div className="w-4 h-4 rounded-full bg-purple-lbg"></div>
                <div className="w-4 h-4 rounded-full bg-sand"></div>
                <div className="w-4 h-4 rounded-full bg-olive"></div>
              </div>
            </div>

            <div className="code-container p-8 mb-2 overflow-x-auto">
              <CodeDisplay code={currentCode} language="fsharp" />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default BackendFeatures;