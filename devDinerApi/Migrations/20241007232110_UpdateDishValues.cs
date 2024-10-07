using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace devDinerApi.Migrations
{
    /// <inheritdoc />
    public partial class UpdateDishValues : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsSelected",
                table: "DinerDishes");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "DinerDishes");

            migrationBuilder.AddColumn<string>(
                name: "DishName",
                table: "DinerDishes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "dayOfWeek",
                table: "DinerDishes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DishName",
                table: "DinerDishes");

            migrationBuilder.DropColumn(
                name: "dayOfWeek",
                table: "DinerDishes");

            migrationBuilder.AddColumn<bool>(
                name: "IsSelected",
                table: "DinerDishes",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "DinerDishes",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
