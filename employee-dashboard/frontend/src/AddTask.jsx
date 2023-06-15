import React from 'react'

function AddTask() {
  return (
    <div className='d-flex flex-column align-items-center pt-4'>
			<h2>Add Task</h2>
			<form class="row g-3 w-50">
			<div class="col-12">
					<label for="inputName" class="form-label">Name</label>
					<input type="text" class="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'/>
				</div>
				<div class="col-12">
					<label for="inputStartDate" class="form-label">Start Date</label>
					<input type="date" class="form-control" id="inputStartDate" placeholder='Enter Date' autoComplete='off'/>
				</div>
				<div class="col-12">
					<label for="inputEndDate" class="form-label">End Date</label>
					<input type="date" class="form-control" id="inputEndDate" placeholder='Enter Date'/>
				</div>
				<div class="col-12">
					<label for="description" class="form-label">Description</label>
					<input type="text" class="form-control" id="description" placeholder="Enter Description" autoComplete='off'/>
				</div>
				{/* <div class="col-12">
					<label for="inputAddress" class="form-label">Address</label>
					<input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" autoComplete='off'/>
				</div> */}
				<div class="col-12">
					<button type="submit" class="btn btn-primary">Create</button>
				</div>
			</form>
		</div>
  )
}

export default AddTask