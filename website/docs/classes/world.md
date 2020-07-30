---
id: "world"
title: "World"
sidebar_label: "World"
---

[@dimforge/rapier3d](../index.md) › [Globals](../globals.md) › [World](world.md)

The physics world.

This contains all the data-structures necessary for creating and simulating
bodies with contacts, joints, and external forces.

## Hierarchy

* **World**

## Index

### Constructors

* [constructor](world.md#constructor)

### Properties

* [max_position_iterations](world.md#max_position_iterations)
* [max_velocity_iterations](world.md#max_velocity_iterations)
* [timestep](world.md#timestep)

### Methods

* [createJoint](world.md#createjoint)
* [createRigidBody](world.md#createrigidbody)
* [forEachCollider](world.md#foreachcollider)
* [forEachRigidBody](world.md#foreachrigidbody)
* [step](world.md#step)
* [takeSnapshot](world.md#takesnapshot)
* [restoreSnapshot](world.md#static-restoresnapshot)

## Constructors

###  constructor

\+ **new World**(`gravity_x`: number, `gravity_y`: number, `gravity_z`: number): *[World](world.md)*

Defined in rapier3d.d.ts:435

Creates a new physics World with the given initial gravity affecting all rigid bodies with
non-zero mass.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gravity_x` | number | - |
`gravity_y` | number | - |
`gravity_z` | number |   |

**Returns:** *[World](world.md)*

## Properties

###  max_position_iterations

• **max_position_iterations**: *number*

Defined in rapier3d.d.ts:514

The maximum position iterations the position-based constraint regularization solver can make.

**`returns`** 

___

###  max_velocity_iterations

• **max_velocity_iterations**: *number*

Defined in rapier3d.d.ts:519

The maximum velocity iterations the velocity-based force constraint solver can make.

**`returns`** 

___

###  timestep

• **timestep**: *number*

Defined in rapier3d.d.ts:524

The current simulation timestep.

**`returns`** 

## Methods

###  createJoint

▸ **createJoint**(`joint`: [JointDesc](jointdesc.md), `parent1`: [RigidBody](rigidbody.md), `parent2`: [RigidBody](rigidbody.md)): *[Joint](joint.md)*

Defined in rapier3d.d.ts:493

Creates a new joint from the given joint descriptior.

# Parameters
- `joint`: the description of the joint to create.
- `parent1`: the first rigid-body attached to this joint.
- `parent2`: the second rigid-body attached to this joint.

**Parameters:**

Name | Type |
------ | ------ |
`joint` | [JointDesc](jointdesc.md) |
`parent1` | [RigidBody](rigidbody.md) |
`parent2` | [RigidBody](rigidbody.md) |

**Returns:** *[Joint](joint.md)*

___

###  createRigidBody

▸ **createRigidBody**(`body`: [RigidBodyDesc](rigidbodydesc.md)): *[RigidBody](rigidbody.md)*

Defined in rapier3d.d.ts:480

Creates a new rigid-body from the given rigd-body descriptior.

# Parameters
- `body`: the description of the rigid-body to create.

**Parameters:**

Name | Type |
------ | ------ |
`body` | [RigidBodyDesc](rigidbodydesc.md) |

**Returns:** *[RigidBody](rigidbody.md)*

___

###  forEachCollider

▸ **forEachCollider**(`f`: Function): *void*

Defined in rapier3d.d.ts:501

Applies the given JavaScript function to each collider managed by this physics world.

# Parameters
- `f`: the function to apply to each collider managed by this physics world. Called as `f(collider)`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`f` | Function |   |

**Returns:** *void*

___

###  forEachRigidBody

▸ **forEachRigidBody**(`f`: Function): *void*

Defined in rapier3d.d.ts:509

Applies the given JavaScript function to each rigid-body managed by this physics world.

# Parameters
- `f`: the function to apply to each rigid-body managed by this physics world. Called as `f(collider)`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`f` | Function |   |

**Returns:** *void*

___

###  step

▸ **step**(): *void*

Defined in rapier3d.d.ts:471

Advance the simulation by one time step.

**Returns:** *void*

___

###  takeSnapshot

▸ **takeSnapshot**(): *Uint8Array | undefined*

Defined in rapier3d.d.ts:459

Takes a snapshot of this world.

Use `World.restoreSnapshot` to create a new physics world with a state identical to
the state when `.takeSnapshot()` is called.

**Returns:** *Uint8Array | undefined*

___

### `Static` restoreSnapshot

▸ **restoreSnapshot**(`data`: Uint8Array): *[World](world.md) | undefined*

Defined in rapier3d.d.ts:467

Creates a new physics world from a snapshot.

This new physics world will be an identical copy of the snapshoted physics world.

**Parameters:**

Name | Type |
------ | ------ |
`data` | Uint8Array |

**Returns:** *[World](world.md) | undefined*
