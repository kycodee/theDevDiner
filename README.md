# theDevDiner
## Description
A web application for managing daily lunch dishes, built with a .NET Core backend and a React frontend. Users can create, read, update, and delete dishes for each day of the week.

## Technologies Used
- **Backend**: .NET Core, Entity Framework Core, SQL Server
- **Frontend**: React, TypeScript, Axios, Bootstrap
- **Development Tools**: ESLint, Prettier

## Startup
1. **Install dependencies**: ```npm install```
2. **Set Up the Database**:
   - Ensure SQL Server is running.
   - Update your connection string in `appsettings.json` to point to your SQL Server instance.
   - Apply any migrations:
       ````dotnet ef database update````
3. **Run the Backend**:
   ````dotnet run````
4. **Start the Frontend**:
   ````npm start````
