#Introduction 
This tool allows the user to edit existing SEP rules.  
The solution is comprised of several projects, but the two main ones are SepAdminToolApi and SepAdminTool.Web.
The Web project contains the user interface and everything it needs.
The UI uses a combination of a React SPA and Razor functionality. 
Razor is used for the main layout while React handles all the actual functionality of the UI.

#Getting Started
1. Download solution from the git repository
2. Download and install the latest version of node and npm
3. Go to the React folder of the SepAdminTool.Web project and run npm install
4. On the Properties for the entire solution make sure to select "Multiple startup projects" and have SepAdminTool.Web set as "Start" and
	SepAdminToolApi as "Start with debugging"

#Build
1. The UI must be built first, so go to the root folder of the SepAdminTool.Web project:
	1.1 You can run ```npm run build``` from the terminal if you wish to check the project's UI locally or if you want to quickly verify some work
	1.2 Run ```npm run prod-build``` for when you're ready to commit your changes. This command will produce three files that must be checked in 
		as part of the commit for your UI changes to work when deployed to an environment.
2. Once the UI is built simply run the solution from Visual Studio. If everything is working correctly you should be redirected to the Platform Admin login page

#Database and where to get the data for the app
To run the solution locally you must have a local instance of SQL Server running on your machine, contact the Data Team to get the scripts
to set the local database up correctly. However, you can also run the solution by pointing to Connecture's development server, to do this follow these steps:

1. Modify SepAdminTool.Web's Web.config and change whatever the value of "SepApiUrl" is to be "http://drxappserver.secure.cnxridc.net:8045/SEPToolsInternal"
2. Modify the Solution's properties to now be "Single startup project" and select SepAdminTool.Web to be the startup project.
3. Build the UI as described in the Build section
4. Run the solution from Visual Studio
