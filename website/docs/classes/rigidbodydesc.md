---
id: "rigidbodydesc"
title: "RigidBodyDesc"
sidebar_label: "RigidBodyDesc"
---

[@dimforge/rapier3d](../index.md) › [Globals](../globals.md) › [RigidBodyDesc](rigidbodydesc.md)

The description used to build a rigid-body.

## Hierarchy

* **RigidBodyDesc**

## Index

### Constructors

* [constructor](rigidbodydesc.md#constructor)

### Properties

* [position](rigidbodydesc.md#position)

### Methods

* [setTranslation](rigidbodydesc.md#settranslation)

## Constructors

###  constructor

\+ **new RigidBodyDesc**(`bodyType`: string): *[RigidBodyDesc](rigidbodydesc.md)*

Defined in rapier3d.d.ts:295

Create a new rigid-body with the given type.

# Parameters
- `bodyType`: the rigid-body type. Can be `static`, `dynamic` or `kinematic`. Dynamic bodies
              are affected by all forces. Kinematic bodies are not affected by any force but can be
              user-controlled by setting its position. A `static` is not affected by any forces, and
              cannot be controlled by the user without potentially introducing insabilities with
              the other bodies it interactd with.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bodyType` | string |   |

**Returns:** *[RigidBodyDesc](rigidbodydesc.md)*

## Properties

###  position

• **position**: *[Vector](vector.md)*

Defined in rapier3d.d.ts:324

The world-space rigid-body position.

**`returns`** 

## Methods

###  setTranslation

▸ **setTranslation**(`x`: number, `y`: number, `z`: number): *void*

Defined in rapier3d.d.ts:319

Sets the world-space position of this rigid-body.

# Parameters
- `x`: the position of this rigid-body along the `x` axis.
- `y`: the position of this rigid-body along the `y` axis.
- `z`: the position of this rigid-body along the `z` axis.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | - |
`y` | number | - |
`z` | number |   |

**Returns:** *void*
